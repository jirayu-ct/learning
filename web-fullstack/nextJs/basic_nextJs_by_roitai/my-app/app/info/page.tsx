import Counter from "@/components/Counter"
import Image from "next/image";
const url = "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";



const InfoPage = () => {
  return (
    <div>
      <Counter />

      <hr />

      <Image
        src={url}
        alt="note book"
        width={500}
        height={333}
        priority
      />
    </div>
  )
}
export default InfoPage