import { Button } from "@/components/Button";
import { packages } from "@/data/agreementInfo";
import encryptor from "@/lib/hash";
import { useState } from "react";

export async function getServerSideProps(context) {
  return {
    props: {
      hostname: context.req.headers.host
    }, // will be passed to the page component as props
  }
}

export default function GenerateUrl({ hostname }) {
  console.log("HOSTNAME:", hostname)
  const [packageType, setPackageType] = useState('essays-only')
  const [numSchools, setNumSchools] = useState()
  const [price, setPrice] = useState()

  const [url, setUrl] = useState()
  const [hash, setHash] = useState()

  const handleChange = (e) => {
    // console.log("GOT:", e.target.value)
    switch (e.target.name) {
      case "package":
        setPackageType(e.target.value)
        break;

      case "num-schools":
        setNumSchools(e.target.value)
        break;

      case "cost":
        setPrice(e.target.value)
        break;

      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // const toHash = [packageType, numSchools, price].join("-")
    setUrl(`${hostname}/agreement?packageType=${packageType}&schools=${numSchools}&price=${price}`)
    // const hashed = encryptor.encrypt(toHash)
    // setHash(hashed)
  }


  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="bg-white w-1/2 px-5 py-3 shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-bold">Generate Url</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="year" className="form-label">
              Package Type
              {/* Package Type is now {packageType} <br />
              Num schools is now {numSchools}<br />
              Price is now {price} <br />
              URL: {url} <br />
              Hashed: {hash}
              Unhashed: {encryptor.decrypt(hash)} */}
            </label>
            <select className="form-select" id='package' name='package' onChange={handleChange} aria-label="Package Type" defaultValue="essays-only">
              {Object.entries(packages).map(([key, value]) => <option key={key} value={key}>{value}</option>)})
            </select>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input type="text" onChange={handleChange} className="form-control" name="num-schools" placeholder="# of Schools" aria-label="Number of Schools" required />
            </div>
            <div className="col">
              <input type="text" onChange={handleChange} className="form-control" name="cost" placeholder="Cost" aria-label="Cost" required />
            </div>
          </div>
          <Button type="submit">Generate</Button>
        </form>

        {url && (
          <div>
            <hr className="m-3" />
            <h1 className="font-bold text-lg my-1">Copy the generated slug below</h1>
            <div className="flex gap-4 align-middle">
              <input value={url} className="form-control" readOnly />
              <Button onClick={() => navigator.clipboard.writeText(url)}>Copy</Button>
            </div>
          </div>
        )}
      </div >

    </div >
  )
}