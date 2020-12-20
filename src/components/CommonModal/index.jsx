import React, { useEffect, useContext } from 'react';
import { Modal } from 'antd';
import Draggable from 'react-draggable';
import ModalContext from './modalContext';

export default function CommonForm(props) {
	const { title, width = '35vw', disabled = false, children } = props;
	const { visible, onCancel, onOk } = useContext(ModalContext);

	return (
		<Modal
			width={width}
			title={
				<div
					style={{
						width: '100%',
						cursor: 'move',
					}}
				>
					{title}
				</div>
			}
			visible={visible}
			onOk={onOk}
			onCancel={onCancel}
			modalRender={modal => <Draggable disabled={disabled}>{modal}</Draggable>}
		>
			{children}
		</Modal>
	);
}
