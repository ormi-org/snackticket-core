import { Message } from "@typed";

export type CommitTxReqData = {
  txToken: string
}

export class CommitTxReq extends Message<CommitTxReqData> {}

export type TxCommitEventData = {
  txData: object
}

export class TxCommitEvent extends Message<TxCommitEventData> {}