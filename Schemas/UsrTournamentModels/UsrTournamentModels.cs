using System.Runtime.Serialization;

namespace Tournament;

[DataContract]
public class UsrTournamentDurationResponse
{
    [DataMember(Name = "totalDurationSeconds")]
    public int TotalDurationSeconds { get; set; }
}