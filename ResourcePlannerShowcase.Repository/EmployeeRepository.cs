using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ResourcePlannerShowcase.Repository.Model;
using System.Data.Entity;

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
            return db.Employees
                .Include("EmployeeAvailabilities")
                .Include("ProjectActivities")
                .Include("Projects")
                .Include("Teams").ToList();
        }

        /// <summary>
        /// Gets employees by teamid
        /// </summary>
        /// <param name="teamID"></param>
        /// <returns>list of employees</returns>
        public IEnumerable<Employee> GetEmployeesByTeam(Guid teamID)
        {
            if (teamID == null)
                throw new ArgumentNullException("TeamID cannot be null.");

            return db.Teams.Where(t => t.Id == teamID).FirstOrDefault().Employees.ToList();
        }

        public void DeleteEmployee(Guid employeeId)
        {
            db.Employees.Remove(db.Employees.Find(employeeId));
            Save();
        }

        public Employee GetEmployeeByID(Guid employeeId)
        {
            if (employeeId == null)
                throw new ArgumentNullException("EmployeeId cannot be null.");

            return db.Employees.Find(employeeId);
        }

        public void InsertEmployee(Employee employee)
        {
            if (employee == null)
                throw new ArgumentNullException("employee cannot be null.");

            db.Employees.Add(employee);
            Save();
        }

        public void Save()
        {
            try
            {
                db.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public void UpdateEmployee(Employee employee)
        {
            if (employee == null)
                throw new ArgumentNullException("employee cannot be null.");

            db.Entry(employee).State = EntityState.Modified;
            Save();
        }

    }
}
