import Header from "./components/Header"
import Form from "./components/Form"

export default function Reserve(){
    return (
        <>
          <div className="border-t h-screen flex justify-center">
            <div className="py-9 m-auto">
              <Header/>
              <Form/>
            </div>
          </div>
        </>
    )
}