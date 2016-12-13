using System.Collections.Generic;
using ResourcePlannerShowcase.Repository.Model;
using ResourcePlannerShowcase.Repository;
using System.Web.Http;
using System.Web.Http.Cors;
using ResourcePlannerShowcase.Helpers;
using System;

namespace ResourcePlannerShowcase.Api.Controllers
{
    [EnableCors(origins: "http://localhost:52912", headers: "*", methods: "*")]
    public class DataController : ApiController
    {
        TeamRepository tr = new TeamRepository();
        EmployeeRepository er = new EmployeeRepository();


        [HttpGet]
        [Route("api/data/getteams")]
        public IEnumerable<Team> GetTeams()
        {
            return tr.GetTeams();
        }

        [HttpGet]
        [Route("api/data/getemployees")]
        public IEnumerable<Employee> GetEmplooyees()
        {
            return er.GetEmployees();
        }

        [HttpGet]
        [Route("api/data/weeks")]
        public int GetWeeks([FromUri]int month, [FromUri]int year)
        {
            Utilization util = new Utilization();

            return util.GetNumberOfWeeks(month, year);
        }

        [HttpGet]
        [Route("api/data/mondays")]
        public IEnumerable<DateTime> GetMondays([FromUri]int month, [FromUri]int year)
        {
            Utilization util = new Utilization();

            return util.GetMondaysInMonth(month, year);
        }
    }
}
