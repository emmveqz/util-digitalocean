
import {
  HttpMethod,
} from "@emmveqz/util-tools-common/dist/enums"
import type {
  IHttpResponse,
  IObj,
} from "@emmveqz/util-tools-common/dist/types"
import {
  ctxTryCatch,
} from "@emmveqz/util-tools-common/dist/Utils"
import {
  httpRequest,
} from "@emmveqz/util-tools-server"
import {
  API_BASE,
  URI_DNSRECORD_CREATE,
  URI_DROPLET_ACTION_CREATE,
  URI_DROPLET_ACTION_GET,
  URI_DROPLET_CREATE,
  URI_DROPLET_GET,
  URI_SNAPSHOT_LIST,
  URI_SSHKEY_LIST,
} from "./Constants"
import type {
  ICreateDnsRecordProps,
  ICreateDropletActionProps,
  ICreateDropletProps,
  IDnsRecordResult,
  IDropletResult,
  IDropletActionResult,
  IGetDropletActionProps,
  IGetDropletProps,
  IListSnapshotsProps,
  IListSnapshotsResult,
  IListSshKeysProps,
  IListSshKeysResult,
} from "./types"

//

export const CreateDropletAction = ({
  dropletId,
  token,
  type,
  ...compositeProps
}: ICreateDropletActionProps): Promise<IHttpResponse<IDropletActionResult>|Error> => {
  const data = ctxTryCatch(JSON as unknown as IObj, JSON.stringify, {
    ...compositeProps,
    type,
  })

  if (data instanceof Error) {
    return Promise.resolve(data)
  }

  const result = httpRequest<IDropletActionResult>(
    `${API_BASE}${URI_DROPLET_ACTION_CREATE.replace("{droplet_id}", dropletId as unknown as string)}`,
    {
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: HttpMethod.POST,
    },
  )

  return result
}

export const GetDropletAction = ({
  actionId,
  dropletId,
  token,
}: IGetDropletActionProps): Promise<IHttpResponse<IDropletActionResult>|Error> => {
  const result = httpRequest<IDropletActionResult>(
    `${API_BASE}${URI_DROPLET_ACTION_GET
      .replace("{action_id}", actionId as unknown as string)
      .replace("{droplet_id}", dropletId as unknown as string)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: HttpMethod.GET,
    },
  )

  return result
}

export const ListSshKeys = ({
  token,
}: IListSshKeysProps): Promise<IHttpResponse<IListSshKeysResult>|Error> => {
  const result = httpRequest<IListSshKeysResult>(
    `${API_BASE}${URI_SSHKEY_LIST}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: HttpMethod.GET,
    },
  )

  return result
}

export const ListSnapshots = ({
  token,
}: IListSnapshotsProps): Promise<IHttpResponse<IListSnapshotsResult>|Error> => {
  const result = httpRequest<IListSnapshotsResult>(
    `${API_BASE}${URI_SNAPSHOT_LIST}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: HttpMethod.GET,
    },
  )

  return result
} //

export const GetDroplet = ({
  dropletId,
  token,
}: IGetDropletProps): Promise<IHttpResponse<IDropletResult>|Error> => {
  const result = httpRequest<IDropletResult>(
    `${API_BASE}${URI_DROPLET_GET.replace("{droplet_id}", dropletId as unknown as string)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: HttpMethod.GET,
    },
  )

  return result
} //

export const CreateDroplet = ({
  token,
  ...dropletOptions
}: ICreateDropletProps): Promise<IHttpResponse<IDropletResult>|Error> => {
  const data = ctxTryCatch(JSON as unknown as IObj, JSON.stringify, {
    ...dropletOptions,
    with_droplet_agent: false,
  })

  if (data instanceof Error) {
    return Promise.resolve(data)
  } //

  const result = httpRequest<IDropletResult>(
    `${API_BASE}${URI_DROPLET_CREATE}`,
    {
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: HttpMethod.POST,
    },
  )

  return result
} //

export const CreateDnsRecord = ({
  domain,
  token,
  ...dnsRecordOptions
}: ICreateDnsRecordProps): Promise<IHttpResponse<IDnsRecordResult>|Error> => {
  const data = ctxTryCatch(JSON as unknown as IObj, JSON.stringify, dnsRecordOptions)

  if (data instanceof Error) {
    return Promise.resolve(data)
  } //

  const result = httpRequest<IDnsRecordResult>(
    `${API_BASE}${URI_DNSRECORD_CREATE.replace("{domain_name}", domain)}`,
    {
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: HttpMethod.POST,
    },
  )

  return result
} //
