using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvestController : ControllerBase
    {
        private readonly InvestmentService _svc;
        private readonly AuditService _audit;

        public InvestController(InvestmentService svc, AuditService audit)
        {
            _svc = svc;
            _audit = audit;
        }

        public class ForecastRequest
        {
            public decimal Amount { get; set; }
            public int Years { get; set; }
            public string RiskLevel { get; set; } = "medium";
        }

        [HttpPost("forecast")]
        public IActionResult Forecast([FromBody] ForecastRequest req)
        {
            var (min, likely, max) = _svc.Forecast(req.Amount, req.Years, req.RiskLevel);
            _audit.Add(new Backend.Models.AuditLog
            {
                Username = User.Identity?.Name ?? "anon",
                Action = "forecast",
                Payload = System.Text.Json.JsonSerializer.Serialize(req),
                Result = System.Text.Json.JsonSerializer.Serialize(new { min, likely, max })
            });
            return Ok(new { min, likely, max });
        }
    }
}
