using Microsoft.VisualStudio.TestTools.UnitTesting;
using ResourcePlannerShowcase.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourcePlannerShowcase.Helpers.Tests
{
    [TestClass()]
    public class UtilizationTests
    {
        Utilization util = new Utilization();
        [TestMethod()]
        public void GetNumberOfWeeksTest()
        {
            Assert.IsTrue(util.GetNumberOfWeeks(1, 2017) == 5);
        }

        [TestMethod()]
        public void GetMondaysInMonthTest()
        {
            Assert.IsTrue(util.GetMondaysInMonth(1, 2017).Count() == 5);
        }
    }
}