using System.Collections.Generic;
using ResourcePlannerShowcase.Repository.Model;
using ResourcePlannerShowcase.Repository;
using System.Web.Http;
using System.Web.Http.Cors;

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


        //// GET: api/values
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
