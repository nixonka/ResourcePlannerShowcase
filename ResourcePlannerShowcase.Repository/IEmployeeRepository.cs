using ResourcePlannerShowcase.Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourcePlannerShowcase.Repository
{
    public interface IEmployeeRepository
    {
        IEnumerable<Employee> GetEmployees();
        Employee GetEmployeeByID(Guid EmployeeId);
        void InsertEmployee(Employee employee);
        void DeleteEmployee(Guid employeeId);
        void UpdateEmployee(Employee employee);
        void Save();
    }
}
