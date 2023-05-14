import { Card, CardContent, Typography } from "@mui/material";
import { DocumentData } from "../../types/types";

type DocumentItemListProps = {
  documentData: DocumentData;
};

export const DocumentItemList = ({ documentData }: DocumentItemListProps) => {
  const { text, country, version } = documentData;

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent 
        sx={{ 
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            gap: 1,
    }}>
        <Typography variant="h5" sx={{ textAlign: 'start' }}> Country: { country } </Typography>
        <Typography variant="h6" sx={{ textAlign: 'start' }}> Version: { version } </Typography>
        <Typography variant="body1" sx={{ textAlign: 'start' }}> Text: { text } </Typography>
      </CardContent>
    </Card>
  );
};
