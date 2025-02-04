export interface NewHobbyFormState {
	image: string;
	title: string;
	status: 'Active' | 'Inactive' | 'Wishlisted';
	rating: string;
	startDate: string;
}

export interface HobbyFormProps {
	onButtonClick: () => void;
	sendHobbyData: (data: NewHobbyFormState) => void;
}