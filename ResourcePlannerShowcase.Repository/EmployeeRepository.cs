using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ResourcePlannerShowcase.Repository.Model;

namespace ResourcePlannerShowcase.Repository
{
    /// <summary>
    /// 
    /// </summary>
    public class EmployeeRepository : IEmployeeRepository
    {
        /// <summary>
        /// 
        /// </summary>
        private RpsEntities db = new RpsEntities();

        public void DeleteEmployee(Guid employeeId)
        {
            throw new NotImplementedException();
        }

        public Employee GetEmployeeByID(Guid EmployeeId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Employee> GetEmployees()
        {
            return db.Employees.ToList();
        }

        //public IEnumerable<Employee> GetEmployeesByTeam(Guid teamID)
        //{
        //    return db.Employees.Where(t => t.Teams)
        //}

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
