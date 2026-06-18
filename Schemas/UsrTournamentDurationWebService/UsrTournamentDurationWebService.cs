using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using Terrasoft.Web.Common;

namespace Tournament;

[ServiceContract]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
public class UsrTournamentDurationWebService : BaseService
{
    [OperationContract]
    [WebInvoke(
        Method = "POST",
        RequestFormat = WebMessageFormat.Json,
        ResponseFormat = WebMessageFormat.Json,
        BodyStyle = WebMessageBodyStyle.WrappedRequest)]
    public UsrTournamentDurationResponse GetFinishedGamesTotalDuration(string tournamentCode)
    {
        var repository = new UsrTournamentDurationRepository(UserConnection);

        var totalDurationSeconds = repository.GetFinishedGamesTotalDurationByTournamentCode(tournamentCode);

        return new UsrTournamentDurationResponse
        {
            TotalDurationSeconds = totalDurationSeconds
        };
    }
}