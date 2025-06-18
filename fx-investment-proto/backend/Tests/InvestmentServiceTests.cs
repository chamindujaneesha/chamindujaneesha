using Backend.Services;
using Xunit;

namespace Backend.Tests
{
    public class InvestmentServiceTests
    {
        [Theory]
        [InlineData(100, 1, "low", 103)]
        [InlineData(100, 1, "medium", 105)]
        [InlineData(100, 1, "high", 108)]
        public void Forecast_ReturnsExpectedLikely(decimal amount, int years, string risk, decimal expected)
        {
            var svc = new InvestmentService();

            var result = svc.Forecast(amount, years, risk);

            Assert.Equal(expected, result.likely);
        }
    }
}
