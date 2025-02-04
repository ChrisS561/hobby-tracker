export interface ModelPopupState {
	itemName: string;
	quantity: number;
	priority: 'Low' | 'Medium' | 'High';
	price: number;
	acquiredState: boolean;
}

export interface ModelPopupProps {
	handleModelButtonClick: () => void;
	handleModelDataChange: (data: ModelPopupState) => void;
}