import { Card, Grid, Typography } from "@mui/material";
import React, { FC, useMemo, useState } from "react";
import { Transaction } from "../../models/transaction";

interface Props {
  transaction: Transaction;
}

export const TransactionListItem: FC<Props> = React.memo((props) => {
  const color = useMemo(() => {
    if (props.transaction.to === "todo") return "red";
    return "green";
  }, [props.transaction.to]);

  return (
    <Card sx={{ marginBottom: 1, backgroundColor: "#E8EEF1" }}>
      <Grid container justifyContent={"center"}>
        <Typography color={color} sx={{ pl: 2 }}>
          Amount: {props.transaction.amount}
        </Typography>
        <Typography sx={{ pl: 2 }}> From: {props.transaction.from}</Typography>
        <Typography sx={{ pl: 2 }}>To: {props.transaction.to}</Typography>
      </Grid>
    </Card>
  );
});
