using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FxController : ControllerBase
    {
        private readonly FxService _fx;
        private readonly AuditService _audit;

        public FxController(FxService fx, AuditService audit)
        {
            _fx = fx;
            _audit = audit;
        }

        [HttpGet("convert")]
        public async Task<IActionResult> Convert([FromQuery] string from, [FromQuery] string to, [FromQuery] decimal amount)
        {
            var result = await _fx.ConvertAsync(from, to, amount);
            _audit.Add(new Backend.Models.AuditLog
            {
                Username = User.Identity?.Name ?? "anon",
                Action = "convert",
                Payload = $"{{'from':'{from}','to':'{to}','amount':{amount}}}",
                Result = $"{{'result':{result}}}"
            });
            return Ok(new { result });
        }
    }
}
