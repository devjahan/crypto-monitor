import { Link, Stack, Text } from "@chakra-ui/react";

const FOOTER_NOTES = [
  {
    category: "Support",
    list: [
      { href: "", label: "Help Center" },
      { href: "", label: "Community Guidelines" },
    ],
  },
  {
    category: "Legal",
    list: [
      { href: "", label: "Privacy Policy" },
      { href: "", label: "Terms of Service" },
      { href: "", label: "Law Enforcement" },
    ],
  },
];

const FooterNotes = () => {
  return FOOTER_NOTES.map(({ category, list }) => {
    return (
      <Stack align={"flex-start"}>
        {list.map(({ href, label }) => (
          <Link href={"#"}>{label}</Link>
        ))}
      </Stack>
    );
  });
};

export default FooterNotes;
