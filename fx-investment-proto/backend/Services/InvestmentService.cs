using System.Collections.Generic;

namespace Backend.Services
{
    public class InvestmentService
    {
        public (decimal min, decimal likely, decimal max) Forecast(decimal amount, int years, string risk)
        {
            decimal rate = risk switch
            {
                "low" => 0.03m,
                "medium" => 0.05m,
                _ => 0.08m
            };

            decimal minRate = rate * 0.8m;
            decimal maxRate = rate * 1.2m;

            decimal min = Compound(amount, minRate, years);
            decimal likely = Compound(amount, rate, years);
            decimal max = Compound(amount, maxRate, years);

            return (min, likely, max);
        }

        private decimal Compound(decimal amount, decimal rate, int years)
        {
            for (int i = 0; i < years; i++)
            {
                amount += amount * rate;
            }
            return decimal.Round(amount, 2);
        }
    }
}
