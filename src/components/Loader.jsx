import React from 'react';
import { Spin} from "antd";

function Loader(props) {
    return (
        <div className={"loader"}>
            <Spin/>
        </div>
    );
}

export default Loader;
