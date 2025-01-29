/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MyMap({Location,onStyleMap=""}){
    return(        
        <>
            {Location && 
                <MapContainer center={Location} zoom={13} style={onStyleMap?onStyleMap:{ height: '120px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap contributors'
                    />
                    <Marker position={Location}>
                        <Popup> Your Address!</Popup>
                    </Marker>
                </MapContainer>
            }
        </>
    )
}

export default MyMap