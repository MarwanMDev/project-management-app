import Clients from '../../components/Client/Clients';
import Projects from '../../components/Project/Projects';
import AddClientModal from '../../components/Client/AddClientModal';
import AddProjectModal from '../../components/Project/AddProjectModal';

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
