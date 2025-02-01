import React, { useState } from 'react';

interface NewHobbyFormState {
	image: string;
	title: string;
	status: 'active' | 'inactive' | 'wishlisted';
	rating: string;
	startDate: string;
}

interface HobbyFormProps {
	onButtonClick: () => void;
	sendHobbyData: (data: NewHobbyFormState) => void
}

const HobbyForm: React.FC<HobbyFormProps> = ({ onButtonClick, sendHobbyData }) => {
	const [formData, setFormData] = useState<NewHobbyFormState>({
		image: '',
		title: '',
		status: 'inactive',
		rating: '',
		startDate: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			console.log(formData);
			sendHobbyData(formData)
			onButtonClick()
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="min-h-screen bg-gray-800 flex items-center justify-center">
			{/* Modal Backdrop */}
			<div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
				<div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-lg">
					<h2 className="text-2xl font-bold mb-6 text-center text-white">
						Add a New Hobby
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-6">
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Hobby Title
							</label>
							<input
								type="text"
								name="title"
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white placeholder-gray-400"
								value={formData.title}
								onChange={handleChange}
								placeholder="Enter the title of your hobby"
								required
							/>
						</div>

						<div className="mb-6">
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Hobby Image
							</label>
							<input
								type="text"
								name="image"
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white placeholder-gray-400"
								value={formData.image}
								onChange={handleChange}
								placeholder="Image URL"
								required
							/>
						</div>

						<div className="mb-6">
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Status
							</label>
							<div className="flex gap-4">
								<div className="flex items-center">
									<input
										type="radio"
										id="active"
										name="status"
										value="active"
										onChange={handleChange}
										checked={formData.status === 'active'}
										className="mr-2"
									/>
									<label htmlFor="active" className="text-sm text-gray-300">
										Active
									</label>
								</div>
								<div className="flex items-center">
									<input
										type="radio"
										id="inactive"
										name="status"
										value="inactive"
										onChange={handleChange}
										checked={formData.status === 'inactive'}
										className="mr-2"
									/>
									<label htmlFor="inactive" className="text-sm text-gray-300">
										Inactive
									</label>
								</div>
								<div className="flex items-center">
									<input
										type="radio"
										id="wishlisted"
										name="status"
										value="wishlisted"
										onChange={handleChange}
										checked={formData.status === 'wishlisted'}
										className="mr-2"
									/>
									<label htmlFor="wishlisted" className="text-sm text-gray-300">
										Wishlisted
									</label>
								</div>
							</div>
						</div>

						<div className="mb-6">
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Rating
							</label>
							<input
								type="number"
								name="rating"
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white placeholder-gray-400"
								value={formData.rating}
								min="1"
								max="5"
								onChange={handleChange}
								placeholder="Rate between 1 and 5"
								required
							/>
						</div>

						<div className="mb-6">
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Start Date
							</label>
							<input
								type="date"
								name="startDate"
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white"
								value={formData.startDate}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="flex gap-4">
							<button
								type="submit"
								className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
							>
								Submit
							</button>
							<button
								type="button"
								onClick={onButtonClick}
								className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300"
							>
								Close
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default HobbyForm;
