export default function Breadcrumbs({ site }) {
  return (
    <section className="page-header page-header-modern bg-transparent">
      <div className="container pt-5 mt-5">
        <div className="row py-5">
          <div className="col text-center">
            <h1 className="text-color-dark text-8 font-weight-bold">{site}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
