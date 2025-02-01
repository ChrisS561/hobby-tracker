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
	return (
		<Card className="mt-6 w-96">
			<CardHeader color="blue-gray" className="relative h-56">
				<img
					src={`${image}`}
					alt={`${title} card`}
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
			<CardFooter className="pt-0">
				<Button>More Information</Button>
			</CardFooter>
		</Card>
	);
}
