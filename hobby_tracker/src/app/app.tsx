import Button from 'components/atoms/button';
import Header from 'components/organisms/header';
import Cards from 'components/organisms/hobby-card';
import Navbar from 'components/organisms/navbar';
import { useEffect, useState } from 'react';
import HobbyForm from '../components/organisms/form/form';
import { NewHobbyFormState } from 'components/Interfaces/formInterface';

function App() {
	const [isactive, setIsActive] = useState<boolean>(false);
	const [hobbyData, setHobbyData] = useState<NewHobbyFormState[]>([]);

	const handlesHobbyData = (data: NewHobbyFormState) => {
		setHobbyData((prevData) => [...prevData, data]);
	};

	const onClick = () => {
		setIsActive(!isactive);
		console.log(isactive);
	};
	// TODO Add a filter for status ( sort by alphanumeric order then by active, inactive, wishlist) and search capability
	// TODO Display "More Information underneath the cards in a grid"
	return (
		<main>
			<Navbar />
			<Header />
			<div className="flex justify-center mt-4">
				<Button
					className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
					onClick={onClick}
				>
					Add new hobby
				</Button>
			</div>
			{isactive ? (
				<HobbyForm onButtonClick={onClick} sendHobbyData={handlesHobbyData} />
			) : null}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-2 ">
				{hobbyData.map((hobby, index) => (
					<Cards
						key={index}
						image={hobby.image}
						title={hobby.title}
						status={hobby.status}
						rating={hobby.rating}
						startDate={hobby.startDate}
					/>
				))}
			</div>

			<footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
				<a href="https://github.com/chrisS561">
					Chris Smith @ {new Date().getFullYear()}
				</a>
			</footer>
		</main>
	);
}

export default App;
