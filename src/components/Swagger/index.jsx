import "swagger-ui-react/swagger-ui.css"
import SwaggerUI from 'swagger-ui-react'

const Swagger = (props) =>
    (
        <div id="swagger-container">
            <SwaggerUI url='test.yaml'/>
            <SwaggerUI url='test.json'/>
        </div>
    )
export default Swagger

