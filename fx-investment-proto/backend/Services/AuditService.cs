using Backend.Models;
using System.Collections.Generic;

namespace Backend.Services
{
    public class AuditService
    {
        private readonly List<AuditLog> _logs = new();

        public void Add(AuditLog log)
        {
            _logs.Add(log);
        }

        public IEnumerable<AuditLog> GetAll() => _logs;
    }
}
