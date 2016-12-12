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
        [TestMethod()]
        public void GetNumberOfWeeksTest()
        {
            Utilization util = new Utilization();

            Assert.IsTrue(util.GetNumberOfWeeks(1, 2017) == 5);
        }
    }
}