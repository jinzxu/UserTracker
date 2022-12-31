import React from "react";
import Card from "./Card";
import Button from "./Button";
import ErrorModalStyles from "./ErrorModal.module.css"

const ErrorModal = props => {
    return (
        <div>
            <div className={ErrorModalStyles.backdrop} onClick={props.onConfirm} />
            <Card className={ErrorModalStyles.modal}>
                <header className={ErrorModalStyles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={ErrorModalStyles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={ErrorModalStyles.actions}>
                    <Button onClick={props.onConfirm} > Okay</Button>
                </footer>
            </Card>
        </div >

    )
}
export default ErrorModal;