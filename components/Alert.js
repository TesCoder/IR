
export default function Alert({ success, message }) {
  if (!message) return
  return (
    <div className={success ? "alert alert-success" : "alert alert-danger"} role="alert" >
      <h2 className="alert-heading" >
        {/* <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill" /></svg> */}
        {success ? ":) Form Submitted!" : "Error Submitting Form"}
      </h2 >
      <p>{message}</p>
      {/* <hr /> */}
      {/* <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p> */}
    </div >
  )
}