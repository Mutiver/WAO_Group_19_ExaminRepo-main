import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { useMemo } from "react";
import { TransactionListItem } from "../components/list/transaction-list-item";
import { GET_ACCOUNTING, GET_ANALYTICS } from "../graphql/quries";
import { Transaction } from "../models/transaction";
import { Analytics } from "../models/analytics";

export const Balance = () => {
  const { data } = useQuery(GET_ACCOUNTING);
  const { data: analytics } = useQuery(GET_ANALYTICS);

  const transactions = useMemo(() => {
    return data
      ? (data.getAccounting.Transactions as Transaction[]).map((trans, i) => (
          <TransactionListItem key={i} transaction={trans} />
        ))
      : undefined;
  }, [data]);

  const balance = useMemo(() => {
    var res = 0.0;
    if (!data) return { balance: undefined, color: undefined };

    (data.getAccounting.Transactions as Transaction[]).forEach((element) => {
      if (element.to === "Todo") {
        res -= element.amount;
      } else {
        res += element.amount;
      }
    });

    return { balance: res, color: res >= 0 ? "green" : "red" };
  }, [data]);

  return (
    <div>
      <Typography sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}>
        Analytics
      </Typography>
      <Typography
        color={balance.color}
        sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}
      >
        Number of Todos :
        {analytics
          ? (analytics.getAnalytics as Analytics).numberOfTodos
          : undefined}
      </Typography>
      <Typography
        color={balance.color}
        sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}
      >
        Number of Transactions :
        {analytics
          ? (analytics.getAnalytics as Analytics).numberOfTransactions
          : undefined}
      </Typography>

      <Typography sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}>
        Balance
      </Typography>
      <Typography
        color={balance.color}
        sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}
      >
        {balance.balance}
      </Typography>
      <Typography sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}>
        Transactions
      </Typography>
      {transactions}
    </div>
  );
};
