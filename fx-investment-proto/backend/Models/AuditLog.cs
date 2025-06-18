using System;

namespace Backend.Models
{
    public class AuditLog
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Action { get; set; } = string.Empty;
        public string Payload { get; set; } = string.Empty; // JSON
        public string Result { get; set; } = string.Empty; // JSON
        public DateTime Ts { get; set; } = DateTime.UtcNow;
    }
}
