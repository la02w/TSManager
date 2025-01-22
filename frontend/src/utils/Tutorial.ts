class Command {
  constructor(
    public name: string,
    public usage: string,
    public permissions: string[],
    public description: string,
    public parameters: string[] | null,
    public example: string,
    public respone: { body: string | null; status: string },
  ) {}

  toHTML(): string {
    return `
<p><strong>help</strong> <code>${this.name}</code></p>
<p><strong>Usage</strong>: ${this.usage}</p>
<p><strong>Permissions</strong>:</p>
<ul class="list-disc pl-10">
${this.permissions.map((perm) => `<li>${perm}</li>`).join('')}
</ul>
<p><strong>Description</strong>:
  ${this.description}</p>

${
  this.parameters
    ? `<p><strong>Parameters</strong>:</p><ul class="list-disc pl-10">
${this.parameters.map((param) => `<li>${param}</li>`).join('')}
</ul>`
    : ''
}

<p><strong>Example</strong>:
  <code>${this.example}</code>
  ${this.respone.body ? `<p>${this.respone.body}</p> ` : ''}
  <p>${this.respone.status}</p>
        `
  }
}

// 示例命令数据
const commands: Command[] = [
  new Command(
    'apikeyadd',
    'apikeyadd scope={manage|write|read} [lifetime={days}] [cldbid={clientDBID}]',
    ['b_virtualserver_apikey_add', 'b_virtualserver_apikey_manage'],
    `
  Creates a new apikey using the specified scope, for the invoking user.
  The default lifetime of a token is 14 days, a zero lifetime means no expiration.
  It is possible to create apikeys for other users using <code>b_virtualserver_apikey_manage.</code>.
    `,
    [
      'scope : <code>manage</code>,<code>write</code> or <code>read</code>',
      'lifetime : integer : lifetime of the token in days; default <code>14</code>, <code>0</code>  means unlimited',
      'cldbid : integer : id of owner; Default is invoker',
    ],
    'apikeyadd scope=manage',
    {
      body: 'apikey=AQB8J1sfuvq4wFAFdo6rsfFq+jAQO9asz3zGq5X id=4 sid=0 cldbid=1 scope=read time_left=1209599',
      status: 'error id=0 msg=ok',
    },
  ),
  new Command(
    'apikeydel',
    'apikeydel id={ID}',
    ['b_virtualserver_apikey_manage'],
    `
Delete an apikey. Any apikey owned by the current user can always be deleted.
  Deleting apikeys from another user requires <code>b_virtualserver_apikey_manage</code>.
    `,
    ['id : integer : Id of API key to be deleted'],
    'apikeydel id=4',
    {
      body: null,
      status: 'error id=0 msg=ok',
    },
  ),
  new Command(
    'serverinfo',
    'serverinfo',
    ['b_virtualserver_info_view'],
    `
Displays detailed configuration information about the selected virtual server
including unique ID, number of clients online, configuration, etc.
For detailed information, see Virtual Server Properties.
    `,
    null,
    'serverinfo',
    {
      body: 'virtualserver_port=9987 virtualserver_unique_identifier=zrPkjznB1tMnRwj01xx7RxXjqeY= virtualserver_name=TeamSpeaks]I[sServer ...',
      status: 'error id=0 msg=ok',
    },
  ),
]

export default function getHTML(command: string) {
  const commandObj = commands.find((cmd) => cmd.name === command)
  if (!commandObj) {
    return 'Command not found.'
  }
  return commandObj.toHTML()
}
