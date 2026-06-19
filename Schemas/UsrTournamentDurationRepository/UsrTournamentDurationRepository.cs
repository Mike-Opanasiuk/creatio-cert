using System;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.Entities;

namespace Tournament;

public class UsrTournamentDurationRepository
{
    private readonly UserConnection _userConnection;

    public UsrTournamentDurationRepository(UserConnection userConnection)
    {
        _userConnection = userConnection;
    }

    public int GetFinishedGamesTotalDurationByTournamentCode(string tournamentCode)
    {
        if (tournamentCode.IsNullOrEmpty())
        {
            return -1;
        }

        var tournamentId = GetTournamentIdByCode(tournamentCode);

        return tournamentId.IsEmpty()
            ? -1
            : GetFinishedGamesTotalDurationByTournamentId(tournamentId);
    }

    public int AddAutomaticGames(Guid tournamentId)
    {
        if (tournamentId.IsEmpty())
        {
            return 0;
        }

        EntitySchema gameSchema = _userConnection.EntitySchemaManager.GetInstanceByName("UsrGame");

        DateTime firstGameDateTime = DateTime.UtcNow;
        int createdCount = 0;

        for (int i = 0; i < 8; i++)
        {
            Entity game = gameSchema.CreateEntity(_userConnection);

            game.SetDefColumnValues();

            game.SetColumnValue("UsrTournamentId", tournamentId);
            game.SetColumnValue("UsrDateTime", firstGameDateTime.AddHours(i * 2));

            game.Save(false);

            createdCount++;
        }

        return createdCount;
    }


    private Guid GetTournamentIdByCode(string tournamentCode)
    {
        var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "UsrTournament")
        {
            RowCount = 1
        };

        var idColumn = esq.AddColumn("Id");

        esq.Filters.Add(esq.CreateFilterWithParameters( FilterComparisonType.Equal,  "UsrCode", tournamentCode ));

        EntityCollection tournaments = esq.GetEntityCollection(_userConnection);

        return tournaments.IsNullOrEmpty()
            ? Guid.Empty 
            : tournaments[0].GetTypedColumnValue<Guid>(idColumn.Name);
    }

    private int GetFinishedGamesTotalDurationByTournamentId(Guid tournamentId)
    {
        var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "UsrGame");

        var durationColumn = esq.AddColumn("UsrDuration");

        esq.Filters.Add(esq.CreateFilterWithParameters(
            FilterComparisonType.Equal,
            "UsrTournament",
            tournamentId
        ));

        esq.Filters.Add(esq.CreateIsNotNullFilter("UsrGameResult"));

        var games = esq.GetEntityCollection(_userConnection);

        var totalDurationSeconds = 0;

        foreach (var game in games)
        {
            totalDurationSeconds += game.GetTypedColumnValue<int>(durationColumn.Name);
        }

        return totalDurationSeconds;
    }
}