import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from '@material-tailwind/react';
import Button from 'components/atoms/button';

interface CardInformation {
	image: string;
	title: string;
	status: string;
	rating: number;
	startDate: string;
}

export function Cards({
	image,
	title,
	status,
	rating,
	startDate,
}: CardInformation) {
    // TODO Add functionality for the Buttons
	return (
		<Card className="mt-6 w-96">
			<CardHeader color="blue-gray" className="relative h-56">
				<img
					src={`${image}`}
					alt={`${title} card`}
					loading="lazy"
					className="object-cover w-full h-full"
				/>
			</CardHeader>
			<CardBody>
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{title}
				</Typography>
				<Typography>Status: {status}</Typography>
				<Typography>Rating: {rating}/5</Typography>
				<Typography>
					Start Date: {new Date(startDate).toDateString()}
				</Typography>
			</CardBody>
			<CardFooter className="pt-2">
				<div className="flex space-x-2">
					<Button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
						More Information
					</Button>
					<Button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
						Edit
					</Button>
					<Button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
						Delete
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
