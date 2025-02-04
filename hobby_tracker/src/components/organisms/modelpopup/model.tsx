import React, { useState } from 'react';
import { ModelPopupProps } from 'components/Interfaces/modelInterface';
import { ModelPopupState } from 'components/Interfaces/modelInterface';

const PopupModel: React.FC<ModelPopupProps> = ({
	handleModelButtonClick,
	handleModelDataChange,
}) => {
	const [modelPopup, setModelPopup] = useState<ModelPopupState>({
		itemName: '',
		quantity: 1,
		priority: 'Medium',
		price: 0,
		acquiredState: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;

		setModelPopup((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleModelDataChange(modelPopup);
		console.log('Form submitted:', modelPopup);
	};

	return (
		<div className="min-h-screen bg-gray-800 flex items-center justify-center">
			{/* Modal Backdrop */}
			<div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
				<div className="bg-gray-900 p-8 rounded-2xl shadow-md w-full max-w-lg">
					<h2 className="text-2xl font-bold mb-6 text-center text-white">
						Add Hobby Item
					</h2>
					<div>
						{/* Item Name */}
						<div className="mb-6">
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Item Name
							</label>
							<input
								type="text"
								name="itemName"
								className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-800 text-white placeholder-gray-400"
								value={modelPopup.itemName}
								onChange={handleChange}
								placeholder="Enter item name (e.g., paintbrush)"
								required
							/>
						</div>

						{/* Quantity */}
						<div className="mb-6">
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Quantity Needed
							</label>
							<input
								type="number"
								name="quantity"
								min="1"
								className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-800 text-white placeholder-gray-400"
								onChange={handleChange}
								value={modelPopup.quantity}
								placeholder="Enter quantity (e.g., 2)"
								required
							/>
						</div>

						{/* Priority */}
						<div className="mb-6">
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Priority Level
							</label>
							<div className="flex gap-4">
								{['Low', 'Medium', 'High'].map((level) => (
									<div key={level} className="flex items-center">
										<input
											type="radio"
											id={level}
											name="priority"
											value={level}
											onChange={handleChange}
											checked={modelPopup.priority === level}
										/>
										<label htmlFor={level} className="text-sm text-gray-300">
											{level}
										</label>
									</div>
								))}
							</div>
						</div>

						{/* Price */}
						<div className="mb-6">
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Estimated Price ($)
							</label>
							<input
								type="number"
								name="price"
								step="0.01"
								onChange={handleChange}
								className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-800 text-white placeholder-gray-400"
								value={modelPopup.price}
								placeholder="Enter price (optional)"
							/>
						</div>

						{/* Acquired Checkbox */}
						<div className="mb-6 flex items-center">
							<input
								type="checkbox"
								id="acquiredState"
								name="acquiredState"
								className="mr-2 focus:ring-green-400"
								checked={modelPopup.acquiredState}
								onChange={handleChange}
							/>
							<label className="text-sm text-gray-300">Mark as acquired</label>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-4 mt-6">
							<button
								type="submit"
								onClick={handleSubmit}
								className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
							>
								Save Item
							</button>
							<button
								type="button"
								className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-600 transition duration-300"
								onClick={handleModelButtonClick}
							>
								Close Form
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopupModel;
