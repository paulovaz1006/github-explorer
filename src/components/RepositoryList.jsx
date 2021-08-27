import { RepositoryItem } from "./RepositoryItem"

const repository = {
  name: "unform",
  description:"form in react", 
  link:"https://github.com/unform/unform" 
}
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem 
          repository={repository} 
        />
      </ul>
    </section>
  )
}