using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Analytics.Model;

public class Stats
{
    [BsonId] public ObjectId Id { get; set; }
    public string UserId { get; set; }
    public long NumberOfTodos { get; set; }
    public long NumberOfTransactions { get; set; }
}