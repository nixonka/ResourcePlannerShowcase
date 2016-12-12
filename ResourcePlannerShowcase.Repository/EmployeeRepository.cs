using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ResourcePlannerShowcase.Repository.Model;

namespace ResourcePlannerShowcase.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private RpsEntities db = new RpsEntities();

        /// <summary>
        /// Getts all employees
        /// </summary>
        /// <returns>list of employees</returns>
        public IEnumerable<Employee> GetEmployees()
        {
            return db.Employees.Include("EmployeeAvailabilities").ToList();
                
                
                //.ForEach(e => e.EmployeeAvailabilities = db.EmployeeAvailabilities.Where(ea => ea.EmployeeId == e.Id ).ToList());
        }

        /// <summary>
        /// Gets employees by teamid
        /// </summary>
        /// <param name="teamID"></param>
        /// <returns>list of employees</returns>
        public IEnumerable<Employee> GetEmployeesByTeam(Guid teamID)
        {
            if(teamID == null)
                throw new ArgumentNullException("TeamID cannot be null.");

            return db.Teams.Where(t => t.Id == teamID).FirstOrDefault().Employees.ToList();
        }

        public void DeleteEmployee(Guid employeeId)
        {
            throw new NotImplementedException();
        }

        public Employee GetEmployeeByID(Guid EmployeeId)
        {
            throw new NotImplementedException();
        }

        public void InsertEmployee(Employee employee)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public void UpdateEmployee(Employee employee)
        {
            throw new NotImplementedException();
        }
    }
}
