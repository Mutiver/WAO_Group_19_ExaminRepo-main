import React, { FC, useMemo, useState } from "react";
import {
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  Box,
  Button,
  Card,
} from "@mui/material";
import { Todo } from "../../models/todo";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface Props {
  Todo: Todo;
  Type?: "Available" | "Taken" | "Delete" | null;
  HandleTakeAction?: (todo: Todo) => void;
  HandleLeaveAction?: (todo: Todo) => void;
  HandleCompleteAction?: (todo: Todo) => void;
  HandleDeleteAction?: (todo: Todo) => void;
}

export const TodoListItem: FC<Props> = React.memo((props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const RenderActionButton = useMemo(() => {
    switch (props.Type) {
      case "Available":
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              props.HandleTakeAction
                ? props.HandleTakeAction(props.Todo)
                : undefined
            }
          >
            Take
          </Button>
        );
      case "Taken":
        return (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                props.HandleLeaveAction
                  ? props.HandleLeaveAction(props.Todo)
                  : undefined
              }
            >
              Leave
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() =>
                props.HandleCompleteAction
                  ? props.HandleCompleteAction(props.Todo)
                  : undefined
              }
            >
              Complete
            </Button>
          </>
        );
      case "Delete":
        return (
          <Button
            variant="contained"
            color="error"
            onClick={() =>
              props.HandleDeleteAction
                ? props.HandleDeleteAction(props.Todo)
                : undefined
            }
          >
            Delete
          </Button>
        );
      default:
        return undefined;
    }
  }, [props]);

  return (
    <Card sx={{ marginBottom: 1, backgroundColor: "#E8EEF1" }}>
      <ListItem onClick={handleToggle}>
        <ListItemText
          primary={props.Todo.title}
          secondary={`Price: ${props.Todo.price}`}
        />
        {isExpanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Typography sx={{ pl: 2 }}>{props.Todo.description}</Typography>
        <Box sx={{ pl: 2, my: 2 }}>{RenderActionButton}</Box>
      </Collapse>
    </Card>
  );
});
