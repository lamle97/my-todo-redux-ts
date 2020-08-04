import React, { ReactNode } from "react";
interface Props {
	placeholder?: string;
	onChangeText?: (text: string) => void;
	onSubmit?: (text: string) => void;
}

interface State {
	text: string;
}

export class AddTodoForm extends React.Component<Props> {
	state = {
		text: "",
	};

	handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { onChangeText } = this.props;
		const text = e.target.value;
		if (onChangeText) {
			onChangeText(e.target.value);
		}
		this.setState({ text });
	};
	// handleClick = (e: React.DOMAttributes<HTMLButtonElement>): void => {
	//   const node = findDOMNode(this.refs.input);
	//   const content = node?.nodeValue?.trim();
	//   this.props.onAddClick(content);
	// };

	handleSubmit = (): void => {
		const { onSubmit } = this.props;
		const { text } = this.state;
		if (onSubmit) {
			onSubmit(text);
		}

		// reset text input
		this.setState({ text: "" });
	};

	render(): ReactNode {
		const { placeholder } = this.props;
		const { text } = this.state;
		return (
			<div>
				<input
					placeholder={placeholder}
					value={text}
					onChange={this.handleChange}
				/>
				<button className="button" onClick={this.handleSubmit}>
					Add
				</button>
			</div>
		);
	}
}
