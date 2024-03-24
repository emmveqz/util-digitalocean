
import type {
  IValOf,
  OmitProp,
} from "@emmveqz/util-tools-common/dist/types"
import type {
  DnsRecordTypeEnum,
  DropletActionEnum
} from "../enums"

//

export type IAuthProps = {
  token: string,
}

export type IApiErrorResponse = {
  id: string,
  message: string,
}

export type ICompositeTypes =
  | "ChangeKernel"
  | "Rebuild"
  | "Rename"
  | "Resize"
  | "Restore"
  | "Snapshot"

export type IDnsRecordCompositeTypes =
  | "MX"

export type INetwork = {
  gateway: string,
  ip_address: string,
  netmask: string,
  type:
    | "private"
    | "public",
}

export type IDnsRecord =
  & {
    data: string,
    name: string,
    ttl: number,
  }
  & ({
    type: IValOf<OmitProp<typeof DnsRecordTypeEnum, IDnsRecordCompositeTypes>>,
  } | {
    /**
     * Used with `type`: `MX`
     */
    priority: number,
    type: DnsRecordTypeEnum.MX,
  })

export type IDroplet = {
  id: number,
  name: string,
  networks: {
    v4: Array<INetwork>,
  },
  region: {
    slug: string,
  },
  size_slug: string,
  snapshot_ids: Array<number>,
  status:
    | "active"
    | "archive"
    | "new"
    | "off",
  tags: Array<string>,
}

export type IDropletAction = {
  id: number,
  resource_id: number,
  status:
    | "in-progress"
    | "completed"
    | "errored",
}

export type ISnapshot = {
  id: string,
  name: string,
  resource_id: string,
  resource_type:
    | "droplet"
    | "volume",
}

export type ISshKey = {
  fingerprint: string,
  id: number,
  name: string,
  public_key: string,
}

export type IListSshKeysProps =
  & IAuthProps

export type IListSshKeysResultSuccess = {
  ssh_keys: Array<ISshKey>,
}

export type IListSshKeysResult =
  | IApiErrorResponse
  | IListSshKeysResultSuccess

export type IListSnapshotsProps =
  & IAuthProps

export type IListSnapshotsResultSuccess = {
  snapshots: Array<ISnapshot>,
}

export type IListSnapshotsResult =
  | IApiErrorResponse
  | IListSnapshotsResultSuccess

export type IGetDropletProps =
  & IAuthProps
  & {
    dropletId: number,
  }

export type ICreateDropletProps =
  & IAuthProps
  & {
    image: number,
    name: string,
    region: string,
    size: string,
    /**
     * Either the SSH key Id number, or its Fingerprint string.
     */
    ssh_keys: Array<number | string>,
    tags?: Array<string>,
  }

export type IDropletResultSuccess = {
  droplet: IDroplet,
}

export type IDropletResult =
  | IApiErrorResponse
  | IDropletResultSuccess

export type IGetDropletActionProps =
  & IAuthProps
  & {
    actionId: number,
    dropletId: number,
  }

export type ICreateDnsRecordProps =
  & IAuthProps
  & IDnsRecord
  & {
    domain: string,
  }

export type IDnsRecordResultSuccess = {
  domain_record: IDnsRecord,
}

export type IDnsRecordResult =
  | IApiErrorResponse
  | IDnsRecordResultSuccess

export type ICreateDropletActionProps =
  & IAuthProps
  & {
    dropletId: number,
  }
  & ({
    type: IValOf<OmitProp<typeof DropletActionEnum, ICompositeTypes>>,
  } | {
    /**
     * Used with `type`: `rebuild`
     */
    image: string,
    type: DropletActionEnum.Rebuild,
  } | {
    /**
     * Used with `type`: `change_kernel`
     */
    kernel: number,
    type: DropletActionEnum.ChangeKernel,
  } | {
    /**
     * Used with `type`: `rename`, `snapshot`
     */
    name: string,
    type:
      | DropletActionEnum.Rename
      | DropletActionEnum.Snapshot,
  } | {
    /**
     * Used with `type`: `resize`
     */
    disk: boolean,
    /**
     * Used with `type`: `resize`
     */
    size: string,
    type: DropletActionEnum.Resize,
  } | {
    /**
     * Used with `type`: `restore`
     */
    image: number,
    type: DropletActionEnum.Restore,
  })

export type IDropletActionResultSuccess = {
  action: IDropletAction,
}

export type IDropletActionResult =
  | IApiErrorResponse
  | IDropletActionResultSuccess
