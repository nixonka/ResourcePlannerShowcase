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
            var days = DateTime.DaysInMonth(year, month);
            int numberOfWeeks = 0;
            for (int i = 1; i <= days; i++)
            {
                var day = new DateTime(year, month, i).DayOfWeek;
                if (day == DayOfWeek.Monday)
                    numberOfWeeks += 1;
            }

            return numberOfWeeks;
        }

    }
}
