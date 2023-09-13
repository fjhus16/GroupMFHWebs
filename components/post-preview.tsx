import DateFormatter from "./date-formatter";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

type Props = {
  title: string;
  coverImageUrl: string;
  date: string;
  excerpt: string;
  category: string;
  id: string;
};

const PostPreview = ({
  title,
  coverImageUrl,
  date,
  excerpt,
  category,
  id,
}: Props) => {
  const { asPath } = useRouter();

  return (
    <Link
      className=""
      as={`${asPath.substring(0, 3)}/posts/${id}`}
      href={`${asPath.substring(0, 3)}/posts/[id]`}
    >
      <div>
        <Card
          square
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          className="w-[320px] md:w-[400px] min-h-[445px]"
        >
          <CardMedia sx={{ height: 140 }} title={title}>
            <div className="relative w-full h-[140px]">
              <Image
                fill
                style={{ objectFit: "cover" }}
                src={coverImageUrl}
                alt={title}
              />
            </div>
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="font-bold text-lg"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              className="text-black text-justify max-h-[110px]"
            >
              {excerpt}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ mt: "auto" }}
            className="flex flex-row items-center justify-between mt-auto font-bold text-lg"
          >
            {category.replaceAll(";", ", ")}
            <DateFormatter dateString={date} />
          </CardActions>
        </Card>
      </div>
    </Link>
  );
};

export default PostPreview;
