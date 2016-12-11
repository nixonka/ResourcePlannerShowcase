using ResourcePlannerShowcase.Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourcePlannerShowcase.Repository
{
    public interface ITeamRepository
    {
        IEnumerable<Team> GetTeams();
        Team GetTeamByID(Guid teamId);
        void InserTeam(Team team);
        void DeleteTeam(Guid teamId);
        void UpdateTeam(Team team);
        void Save();
    }
}
