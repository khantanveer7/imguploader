import React from 'react'
import useFirestore from '../hooks/useFirestore'
import './LayoutImage.css'


const LayoutImage = ({ setSelectedImg }) => {

    const { docs } = useFirestore('images')
    console.log(docs);

    return (
        <>
            <div className="img-grid">
                {docs && docs.map(doc => (
                    <div className="img-wrap" key={doc.id}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <img src={doc.url} alt="mypics" />
                        {/* <DeleteIcon onClick={event =>
                            useFirestore.collection('images').doc(doc.id).delete()
                        } /> */}
                    </div>

                ))}


            </div>
        </>
    )
}

export default LayoutImage
