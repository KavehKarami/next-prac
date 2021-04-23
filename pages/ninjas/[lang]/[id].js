import { useRouter } from 'next/router'

const logger = () => {
  const router = useRouter()
  const { lang, id } = router.query;

  return ( 
    <div>
      <div>your lang is: {lang}</div>
      <div>your id is: {id}</div>
    </div>
   );
}
 
export default logger;