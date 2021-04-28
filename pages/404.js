import Link from "next/link"

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That Page Cannot be Found.</h2>
      <p>Go Back to the <Link href="/">Home Page</Link></p>
    </div>
   );
}
 
export default NotFound;