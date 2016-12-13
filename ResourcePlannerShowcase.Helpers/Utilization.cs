using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourcePlannerShowcase.Helpers
{
    public class Utilization
    {
        public int GetNumberOfWeeks(int month, int year)
        {
            int numberOfWeeks = 0;
            var days = DateTime.DaysInMonth(year, month);

            for (int i = 1; i <= days; i++)
            {
                var day = new DateTime(year, month, i).DayOfWeek;
                if (day == DayOfWeek.Monday)
                    numberOfWeeks += 1;
            }

            return numberOfWeeks;
        }

        public IEnumerable<DateTime> GetMondaysInMonth(int month, int year)
        {
            List<DateTime> mondays = new List<DateTime>();
            var days = DateTime.DaysInMonth(year, month);

            for (int i = 1; i <= days; i++)
            {
                var day = new DateTime(year, month, i);
                if (day.DayOfWeek == DayOfWeek.Monday)
                    mondays.Add(day);
            }


            return mondays;

        }

    }
}
